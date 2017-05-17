

import java.io.Console;

/*
실행방법
bin:path지정 classpath 지정
c:\temp 폴드 생성 및 파일 카피
패키지명 삭제
*/


public class gogo {

   public static void main(String[] args) {
      // TODO Auto-generated method stub
//      System.console()을 통한 콘솔객체 생성
      Console console = System.console();
//      아이디 입력
      System.out.println("아이디입력:");
//      enter키 입력전에 ㄹ인단위 문자열 입력 : .readLine()
      String id = console.readLine();
//      패스워드 입력
      System.out.print("패스워드입력:");
//      라인단위 패스워드형 문자열 입력 : .readPassword()
//      return형이 char[]
      char[] passChar = console.readPassword();
//      char[] 을 String new String(char[])
      String password = new String(passChar);
      System.out.println("입력한 id와 password");
      System.out.println("id:"+id);
      System.out.println("password:"+password);
      
   }

}