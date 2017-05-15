/*
 # 동기화와 컬렉션
 1) 동기화라는 쓰레드환경에서 특정 데이터의 일관성 보장에 관련된 내용이다. 
    여러 쓰레드가 동시에 컬렉션을 접근하면 의도하지 않게 요소가 변경되어
    데이터가 불안정한 상태가 된다.
    
 2) 컬렉션 객체 중, Vector, HashTable은 동기화 메서드로 구성되어 멀티 쓰레드 환경에서
    안정적으로 요소를 처리할 수 있다.
    
 3) Collections
    - List : synchronizedList(동기화가 필요한 list 객체)
    - Map : synchronizedMap(동기화가 필요한 map 객체)
    - Set : synchronizedSet(동기화가 필요한 set 객체)   
*/

/* # 목표
 1) jdbc의 개념과 자바에서 활용되는 DB처리 프로세스에 대해 명확하게 파악한다.
 
 2) VO(value object), DAO(data access object), DTO(data transfer object)를 구분해서
    DB처리시 활용할 수 있도록 한다.
    
 3) 데이터베이스의 내용을 조회, 등록, 수정, 삭제 시 처리할 모듈을 구성할 수 있다.
*/
/*
 # 생각해봅시다.
 1) java에서 데이터베이스 서버는 어떻게 연결이 될까?
 2) 데이터를 조회할 때 필요로 하는 요소들이 어떤 것이 있을까?
 3) java에서 데이터베이스와 연결 후 자원은 어떻게 관리를 할까? 
 4) DB연결 시 발생한 예외 내용은 어떤 것이 있을까?
 5) SQL을 통해 동적 query는 어떻게 처리해야 할까?
*/

/*
 # JDBC
  - JDBC(Java Database Connectivity)란 자바로 데이터베이스에
    접근할 수 있게 하는 프로그램 API를 말한다. 
    
    Database Client  ---->    Database Server
                         
    Java Program            ↑
                 ---->   JDBC Driver
    Java기반 Util   
    
 # jdbc를 이용해서 DB 접근
 1. driver 다운로드 및 lib에 위치지정
     1) Orcale 서버
    - C:\oraclexe\app\oracle\product\11.2.0\server\jdbc\lib\ojdbc6.jar   

    2) Web(jsp기반) 프로그램
    - \WebContent\WEB-INF\lib 에 해당 lib파일을 위치
    
 2. 드라이버 로드 
    1) 클래스를 JVM 메모리에 로딩
       - lib에 있는 package명.class
       - orcle.jdbc.driver.Oracle.Driver.class
       - Class.forName( dirver명 )
  
 3. DB와 연결
   - url : jdbc driver(thin):ip정보:port정보:SID
   - jdbc:oracle:thin:@localhost:1521:xe
   - Connection con = DriverManager.getConnection(url, id, pass);
   
   [driver 메모리]── DriverManger ──>[Connection] ──> [Statement, PreparedStatement] ─── sql( select * from emp, insert into XXX )
                                                      │
                                                   ├─────────── 결과값이 있을 경우 ───> [ResultSet] ── 효율적 처리를 위해 ───> [ ArrayList<VO> ] ───> 웹
                                                   └─commit();                                                          │
                                                                                                                      └───────────> 애플리케이션
 
 4. 대화하기(Statement, PreparedStatement)
    1) SQL문 작성
       - select * from emp
    
    2) 연결된 객체(con)과 Statement 연결
       - Statement stmt = con.createStatement();
    
    3) 실제 SQL문 처리. 결과값이 있을 경우 ResultSet
       - ResultSet rs = stmt.executeQuery(SQL문)
 
 5. 결과값 처리(ResultSet)
    - next() : 데이터가 있을 때까지 호출(다음 row에 데이터가 있는지 여부를 boolean값으로)
    - while( rs.next() )
    - getXXX("SQL의 title명");      <--- sql에서 컬럼명에 별명을 붙이면 별명값으로 데이터를 가져옴. ex) select ename [name] from emp. name로 가져옴
      ex) rs.getString("name");
       
 6. 결과값이 없는 SQL문
    - con.commit() 호출 : 등록, 수정, 삭제의 확정
    - con.rollback() 호출 : 에러가 났을 경우
   
 7. ResultSet -> ArrayList<VO> 변환 처리
    - sql의 list와 맞는 VO 객체 생성(java)
    - ArrayList<Emp> list = new ArrayList<Emp>();
    - Emp e = null;
    - while( rs.next() ){         -- rs.next() : row단위로 반복처리
          e = new.Emp();
          e.setEmpno( rs.getInt("empno") );
          ...
          ...
          list.add(e);
      }
 
 # jdbc에서 예외 처리
 1) Database 접속은 외부에 연결하여 데이터 IO(input/out)가 일어나기에
    자바에서는 반드시 예외처리하게끔 강제하고 있다.
    - 드라이버 메모리 설정
    - 데이터베이스 연결, sql 처리, 결과값을 받는 내용 -> SQLException
    try{
       DB처리 관련된 코드
    }catch(Exception e){
    
    }
 
 2) Exception에서의 자원해제
    - close() : 자원해제를 해야 효과적으로 메모리 관리가 된다.
    - finally{}구문에서 수행
    - 수정, 삭제, 입력시 예외가 발생하면 rollback() 호출하여 원복처리
                                                                                                                      
*/

/*
 # 공통 DB모듈 만들기
 1) XXXDB.java 만들기
 
 2) vo 패키지 생성
    - VO 클래스 생성
    
 3) field선언
   Connection con       : 연결객체
   Statement stmt       : 대화
    PreStatement pstmt
   ResultSet rs;       : 결과
 
*/
package database_test;

import java.sql.*;
import java.util.ArrayList;

import vo_test.Study_vo;

public class Study_empDB {
   
//   1. field 선언
//   1) Connection con          : 연결 객체
   private Connection con;
   
//   2) Statement stmt          : 대화
//      PreparedStatement pstmt
   private Statement stmt;
   private PreparedStatement pstmt;
   
//   3) ResultSet rs;          : 결과   
   private ResultSet rs;
   
//   2. 연결처리하는 메서드(예외사항 위임 처리)
   private void setConnection() throws ClassNotFoundException, SQLException{   
//      try {
//         1) driver메모리에 올리기.(Exception 처리)
         Class.forName("oracle.jdbc.driver.OracleDriver");
         
//         DB드라이버종류(thin)@ip:port:sid
         String url = "jdbc:oracle:thin:@localhost:1521:xe";
         
//          2) DriverManager.getConnection(url, id, pass).     (Exception 처리)
         con = DriverManager.getConnection(url, "scott", "tiger");
         System.out.println("정상 접속 성공.");
//      } catch (ClassNotFoundException e) {
//         // TODO Auto-generated catch block
//         e.printStackTrace();
//         System.out.println("드라이버 이상.");
//      } catch (SQLException e) {
//         // TODO Auto-generated catch block
//         e.printStackTrace();
//         System.out.println("접속 이상.");
//      }
   }
   
//   emp 테이블에 select * from emp를 통해서 가져오는 데이터를 ArrayList<Emp>로 가져옮
   public ArrayList<Study_vo> empList(){
      ArrayList<Study_vo> list = new ArrayList<Study_vo>();
      try {
//         1. 연결         
         setConnection();   
         
//         2-1. 대화
         stmt = con.createStatement();
//         2-2. sql문 처리         
         String query ="select * from emp";
//         2-3. 대화를 하고 결과값(ResultSet)
         rs = stmt.executeQuery(query);
         
//         3. 결과(select -> ResultSet, insert/update/delete -> DB내 처리)   
//         rs.next() : loop 블럭{}을 처리한 후에, 다음 row에 데이터가 있는지 여부를 return true/false
//         rs.getXXX("컬럼명") 컬럼명 : sql 문에 나타나는 실제 title 컬럼명(별명을 붙였을 경우 별명으로 불러야 된다.)

//         3-1 ArrayList<Emp_0511>에 데이터를 담은 단위객체(Emp)추가
//            Emp(생성, 데이터할당) --> ArrayList<Emp_0511> add

//         단위 객체 선언         
         Study_vo emp = null;
         
//         Emp_0511 emp를 loop문 안에 선언하면 참조객체가 반복만큼 생겨 메모리 부하 발생   
//         Emp emp = new emp();를 loop문 밖에서 생성하고 loop문 안에 생성하지 않으면 
//         같은 객체를 참조하기 때문에 마지막 데이터를 데이터 건수만큼 할당         
         while( rs.next() ){
            emp = new Study_vo();
//            emp.setXXX()에 가져온 데이터를 rs.getXXX("컬럼명")으로
//            할당하여 emp필드에 데이터를 저장            
            emp.setJempno(rs.getInt("empno"));
            emp.setJename(rs.getString("ename"));
            emp.setJjob(rs.getString("job"));
            emp.setJmgr(rs.getInt("mgr"));
            emp.setJhiredate(rs.getDate("hiredate"));
            emp.setJsal(rs.getDouble("sal"));
            emp.setJcomm(rs.getDouble("comm"));
            emp.setJdeptno(rs.getInt("deptno"));
            list.add(emp);
            
         }
//         수정, 삭제, 등록 시에는 commit();
         
      } catch (ClassNotFoundException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      } catch (SQLException e) {
         // TODO Auto-generated catch block
//         수정, 삭제, 등록 rollback();         
         e.printStackTrace();
      }finally{
            try {
//               ResultSet이 현재 메모리에 할당되어 있다면               
               if(rs!=null){
                  rs.close();
               }
               if(stmt!=null){
                  stmt.close();
               }
               if(con!=null){
                  con.close();
               }
            } catch (SQLException e) {
               // TODO Auto-generated catch block
               e.printStackTrace();
            }
         
      }
      return list;
   }   
      
 //   검색 메소드   
      public ArrayList<Study_vo> search(Study_vo sch){
         ArrayList<Study_vo> list = new ArrayList<Study_vo>();
         try {   
            setConnection();   
            stmt = con.createStatement();   
            String query ="select * "+"from emp "+"where ename like '%"+sch.getJename()+"%' "+"and job like '%"+sch.getJjob()+"%' ";
            System.out.println(query);
            rs = stmt.executeQuery(query);            
            Study_vo emp = null;
      
            while( rs.next() ){
               emp = new Study_vo();         
               emp.setJempno(rs.getInt("empno"));
               emp.setJename(rs.getString("ename"));
               emp.setJjob(rs.getString("job"));
               emp.setJmgr(rs.getInt("mgr"));
               emp.setJhiredate(rs.getDate("hiredate"));
               emp.setJsal(rs.getDouble("sal"));
               emp.setJcomm(rs.getDouble("comm"));
               emp.setJdeptno(rs.getInt("deptno"));
               list.add(emp);            
            }
            
         } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         } catch (SQLException e) {   
            e.printStackTrace();
         }finally{
               try {            
                  if(rs!=null){
                     rs.close();
                  }
                  if(stmt!=null){
                     stmt.close();
                  }
                  if(con!=null){
                     con.close();
                  }
               } catch (SQLException e) {
                  // TODO Auto-generated catch block
                  e.printStackTrace();
               }
            
         }
         return list;
      }
   //   PreparedStatement   
      public ArrayList<Study_vo> searchPre(Study_vo sch){
         ArrayList<Study_vo> list = new ArrayList<Study_vo>();
         try {   
            setConnection();   
            String query ="SELECT * "+"FROM EMP "+"WHERE ENAME LIKE '%'||?||'%' "+"AND JOB LIKE '%'||?||'%' ";
            System.out.println(query);
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, sch.getJename());
            pstmt.setString(2, sch.getJjob());
            rs = pstmt.executeQuery();
            Study_vo emp = null;
      
            while( rs.next() ){
               emp = new Study_vo();         
               emp.setJempno(rs.getInt("empno"));
               emp.setJename(rs.getString("ename"));
               emp.setJjob(rs.getString("job"));
               emp.setJmgr(rs.getInt("mgr"));
               emp.setJhiredate(rs.getDate("hiredate"));
               emp.setJsal(rs.getDouble("sal"));
               emp.setJcomm(rs.getDouble("comm"));
               emp.setJdeptno(rs.getInt("deptno"));
               list.add(emp);            
            }
            
         } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         } catch (SQLException e) {   
            e.printStackTrace();
         }finally{
               try {            
                  if(rs!=null){
                     rs.close();
                  }
                  if(stmt!=null){
                     stmt.close();
                  }
                  if(con!=null){
                     con.close();
                  }
               } catch (SQLException e) {
                  // TODO Auto-generated catch block
                  e.printStackTrace();
               }
         }
         return list;
      }
      
   public static void main(String[] args) {
      // TODO Auto-generated method stub
	   Study_empDB db = new Study_empDB();
      for(Study_vo data: db.empList()){
         System.out.print(data.getJempno()+"\t");
         System.out.print(data.getJename()+"\t");
         System.out.print(data.getJjob()+"\t");
         System.out.print(data.getJmgr()+"\t");
         System.out.print(data.getJhiredate()+"\t");
         System.out.print(data.getJsal()+"\t");
         System.out.print(data.getJcomm()+"\t");
         System.out.print(data.getJdeptno()+"\n");
      }
   }
}
/*
 # ArrayList<VO> 데이터 가져오기
    1. Data
       1) 테이블 구조
       2) sql : select * from emp
           - 나타나는 데이터의 column명과 type(문자/숫자/날짜형/boolean 등) 확인
    
    2. VO : 단위데이터를 저장할 class code
          - sql의 column명과 type에 합당한 VO class 생성
    
    3. Database 모듈
          - public ArrayList<Emp> empList(){}
          - 메서드 선언
 
 # data list 가져오는 메서드
  public ArrayList<EMP> empList(){
     - return할 결과값 선언;
     ArrayList<Emp> list = new ArrayList<Emp>();
     
     - setConn(): DB연결 처리 메서드 호출
     
     - 대화처리 : con.createStatement()
               rs = stmt.executeQuery(sql문)
     
     - 결과값 받기 : while( rs.next() )    -> 데이터를 row단위로 가져오면서 다음row에 데이터가 있는지 여부 확인
                 rs.getXXX("컬럼명")
                 list.add(emp) : ArrayList에 객체 넣기
        
   - 예외처리 : 자원해제
   
 # 예외와 자원해제
 1) 자원 할당 순서
    - Connection -> Statement -> ResultSet
    
 2) 자원 해제 순서
    - ResultSet -> Statement -> Connection
    - close();
    - if(자원!=null){
         자원.close();
      }
*/
