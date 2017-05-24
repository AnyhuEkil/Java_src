package fm2_DAO;

import java.sql.Connection;  
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import fm2_VO.SecondPageDTO;

public class SecondPageDAO {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	private void setConn() throws ClassNotFoundException, SQLException{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String conInfo = "jdbc:oracle:thin:@localhost:1521:xe";
		con = DriverManager.getConnection(conInfo,"scott","tiger" );
		System.out.println("Good to connect DB. Please Go on.");
	}
	public SecondPageDAO getPrice(SecondPageDAO sch) throws ClassNotFoundException, SQLException{
		setConn();
		SecondPageDAO ab = null;
		
		try {
			String sql = "select * from Auction_item "
					+ "where auctionID = ? ";
			System.out.println(sql);
			
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, sch.getAuctionID());
			rs = pstmt.executeQuery();
			
			if(rs.next()){ 
				ab = new SecondPageDAO();
				ab.setAuctionID(rs.getInt(1) );
				ab.setCurrentBid(rs.getDouble(2) );
			}
			
			
		} finally{
			try {
				if(rs!= null) rs.close();
				if(pstmt != null) pstmt.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return ab;
	}
	
	public void raisePrice(SecondPageDAO udt) {
		try {
			setConn();
			String sql = "update Auction_item "
					+ "set currentBid = ? "
					+ "where auctionID = ? ";
			System.out.println(sql);
			con.setAutoCommit(false);
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(2, udt.getAuctionID());
			pstmt.setDouble(1, udt.getCurrentBid());
			pstmt.executeUpdate();
			con.commit();
			
			
		}catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				con.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		} finally{
			try {
				if(pstmt != null) pstmt.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	
public static void main(String[] args){
//	AuctionBidDAO db = new AuctionBidDAO();
//	SecondPageDAO sch = new SecondPageDAO();
//	sch.setCurrentBid(5000.0);
//	sch.setAuctionID(2);
//	try {
//		db.raisePrice(sch);
//		System.out.println(db.getPrice(sch).getCurrentBid());
//	} catch (Exception e) {
//		e.printStackTrace();
//	}
}


//package fm2_DAO;
//
//import java.sql.Connection;
//import java.sql.Date;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.Statement;
//import java.util.ArrayList;
//
//import z02_vo.SecondPageDTO;
//
//public class SecondPageDAO {
//
//	private String url = "jdbc:oracle:thin:@192.168.0.110:1522:orcl";
//	private String uid = "cto";
//	private String upw = "qqqq";
//
//	public SecondPageDAO() {
//		try {
//			Class.forName("oracle.jdbc.driver.OracleDriver");
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	public ArrayList<SecondPageDTO> SecondPage() {
//		ArrayList<SecondPageDTO> dtos = new ArrayList<SecondPageDTO>();
//		Connection con = null;
//		Statement stmt = null;
//		ResultSet rs = null;
//		try {
//			con = DriverManager.getConnection(url, uid, upw);
//			stmt = con.createStatement();
//			rs = stmt.executeQuery("select * from acornproduct");
//
//			while (rs.next()) {
//				String auction_id = rs.getString("auction_id");
//				String auctioneer_id = rs.getString("auctioneer_id");
//				String item_name = rs.getString("item_name");
//				Date start_date = rs.getDate("start_date");
//				Date end_date = rs.getDate("end_date");
//				String state = rs.getString("state");
//				String cureent_bid_amount = rs.getString("cureent_bid_amount");
//
//				SecondPageDTO dto = new SecondPageDTO(auction_id, auctioneer_id, item_name, start_date, end_date, state,
//						cureent_bid_amount);
//				dtos.add(dto);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if (rs != null)
//					rs.close();
//				if (stmt != null)
//					stmt.close();
//				if (con != null)
//					con.close();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return dtos;
//	}
//
//	public static void main(String[] args) {
//		SecondPageDAO dao = new SecondPageDAO();
//	}
//}
