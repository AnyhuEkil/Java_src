package fm_DAO;

import java.sql.Connection;
//import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import fm_VO.Auction_Bid;

public class SecondPageDAO {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;

	// private void setConn() throws ClassNotFoundException, SQLException {
	// Class.forName("oracle.jdbc.driver.OracleDriver");
	// String conInfo = "jdbc:oracle:thin:@localhost:1521:xe";
	// con = DriverManager.getConnection(conInfo, "scott", "tiger");
	// System.out.println("Good to connect DB. Please Go on.");
	// }
	public SecondPageDAO  getPrice(SecondPageDAO  sch) throws ClassNotFoundException, SQLException {
		// setConn();
		SecondPageDAO  ab = null;

		try {
			con = Conn_DB.conn();
			String sql = "select * from Auction_item " + "where Auction_id = ? ";
			System.out.println(sql);

			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, sch.getAuction_id());
			rs = pstmt.executeQuery();

			if (rs.next()) {
				ab = new SecondPageDAO();
				ab.setAuction_id(rs.getInt(1));
				ab.setBid_amount(rs.getDouble(2));
			}

		} finally {
			try {
				if (rs != null)
					rs.close();
				if (pstmt != null)
					pstmt.close();
				if (con != null)
					con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return ab;
	}

	public void raisePrice(Auction_Bid udt) {
		try {
			con = Conn_DB.conn();
			String sql = "update Auction_item " + "set Current_bid_amount = ? " + "where Auction_id = ? ";
			System.out.println(sql);
			con.setAutoCommit(false);
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(2, udt.getAuction_id());
			pstmt.setDouble(1, udt.getBid_amount());
			pstmt.executeUpdate();
			con.commit();

		} catch (ClassNotFoundException e) {
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
		} finally {
			try {
				if (pstmt != null)
					pstmt.close();
				if (con != null)
					con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	public Auction_Bid bidding_date(Auction_Bid data){
		Auction_Bid i = null;
		try {
			con = Conn_DB.conn();
			String sql = "SELECT * FROM ITEM";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()){
				i = new Item();
				i.setBidding_date(rs.getDate("dday"));
			}
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			try {
				if(rs!=null) rs.close();
				if(pstmt!=null) pstmt.close();
				if(con!=null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return i;
	}

	public static void main(String[] args) {
		// AuctionBidDAO db = new AuctionBidDAO();
		// Auction_Bid sch = new Auction_Bid();
		// sch.setCurrent_bid_amount(5000.0);
		// sch.setAuction_id(2);
		// try {
		// db.raisePrice(sch);
		// System.out.println(db.getPrice(sch).getCurrent_bid_amount());
		// } catch (Exception e) {
		// e.printStackTrace();
		// }
	}
}

/*
 * package fm_DAO;
 * 
 * import java.sql.Connection; import
 * java.sql.Date;import*java.sql.DriverManager; import java.sql.ResultSet;import
 * java.sql.Statement;*import java.util.ArrayList;**import
 * fm_VO.Auction_Bid;***
 * 
 * public class SecondPageDAO {
 * 
 * private String url = "jdbc:oracle:thin:@192.168.0.110:1522:orcl";private*
 * String uid = "cto"; private String upw = "qqqq";***
 * 
 * public SecondPageDAO() { try {
 * Class.forName("oracle.jdbc.driver.OracleDriver"); } catch (Exception e) {
 * e.printStackTrace(); } }
 * 
 * public ArrayList<Auction_Bid> SecondPage() { ArrayList<Auction_Bid> dtos
 * = new ArrayList<Auction_Bid>(); Connection con = null; Statement stmt =
 * null; ResultSet rs = null; try { con = DriverManager.getConnection(url, uid,
 * upw); stmt = con.createStatement(); rs =
 * stmt.executeQuery("select * from acornproduct");
 * 
 * while (rs.next()) { String auction_id = rs.getString("auction_id"); String
 * auctioneer_id = rs.getString("auctioneer_id"); String item_name =
 * rs.getString("item_name"); Date start_date = rs.getDate("start_date"); Date
 * end_date = rs.getDate("end_date"); String state = rs.getString("state");
 * String Current_bid_amount = rs.getString("Current_bid_amount");
 * 
 * Auction_Bid dto = new Auction_Bid(auction_id, auctioneer_id, item_name,
 * start_date, end_date, state, Current_bid_amount); dtos.add(dto); } } catch
 * (Exception e) { e.printStackTrace(); } finally { try { if (rs != null)
 * rs.close(); if (stmt != null) stmt.close(); if (con != null) con.close(); }
 * catch (Exception e) { e.printStackTrace(); } } return dtos; }
 * 
 * public static void main(String[] args) { SecondPageDAO dao = new
 * SecondPageDAO(); } }
 */
