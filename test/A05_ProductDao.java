package test;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import test.Product;

//jspexp.z01_database.A05_ProductDao
public class A05_ProductDao {
   private Connection con;
   private PreparedStatement pstmt;
   private ResultSet rs;
   public Product getProduct(Product sch){
      Product whyy = null;
      try {
         con = A00_DB.conn();
         String sql="select * from product "
               + "where prod = ? ";
         pstmt=con.prepareStatement(sql);
         pstmt.setString(1, sch.getName());
         rs = pstmt.executeQuery();
         if(rs.next()){
        	whyy = new Product();
        	whyy.setName(rs.getString(1)); // <- PROD
        	whyy.setCnt(rs.getInt(2));
         }
         
      } catch (ClassNotFoundException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      } catch (SQLException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }finally{
         if(rs!=null)
            try {
               rs.close();
            } catch (SQLException e) {
               // TODO Auto-generated catch block
               e.printStackTrace();
            }
         if(pstmt!=null)
            try {
               pstmt.close();
            } catch (SQLException e) {
               // TODO Auto-generated catch block
               e.printStackTrace();
            }
         if(con!=null)
            try {
               con.close();
            } catch (SQLException e) {
               // TODO Auto-generated catch block
               e.printStackTrace();
            }
      }
      
      return whyy;
   }
   
   
   
   
   public static void main(String[] args) {
      // TODO Auto-generated method stub

   }

}