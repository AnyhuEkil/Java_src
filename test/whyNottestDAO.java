package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import test.whyNottestVO;


public class whyNottestDAO {
   
   private String url = "jdbc:oracle:thin:@localhost:1521:xe";
   private String uid = "scott";
   private String upw = "tiger";
   
   
   public whyNottestVO {
      try {
         Class.forName("oracle.jdbc.driver.OracleDriver");
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
   public ArrayList<whyNottestDAO> SecondPage(){
      
      ArrayList<whyNottestDAO> dtos = new ArrayList<whyNottestDAO>();
      
      Connection con = null;
      Statement stmt = null;
      ResultSet rs = null;
      
      try {
         con = DriverManager.getConnection(url,uid,upw);
         stmt = con.createStatement();
         rs = stmt.executeQuery("select * from acornproduct");
         
         while(rs.next()){
            String auction_id = rs.getString("auction_id");
            String auctioneer_id = rs.getString("auctioneer_id");
            String item_name = rs.getString("item_name");
            String start_date = rs.getString("start_date");
            String end_date = rs.getString("end_date");
            String state = rs.getString("state");
            String cureent_bid_amount = rs.getString("cureent_bid_amount");
            
            whyNottestDAO dto = new whyNottestDAO(auction_id, auctioneer_id,
                  item_name,start_date, end_date, state, cureent_bid_amount);
            dtos.add(dto);
         }
      } catch (Exception e) {
         e.printStackTrace();
      }finally{
         try{
            if(rs != null)rs.close();
            if(stmt != null) stmt.close();
            if(con != null)con.close();
         }catch(Exception e){
            e.printStackTrace();
         }
      }
      return dtos;
   
   
   }
   
   
}