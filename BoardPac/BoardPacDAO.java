package BoardPac;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import BoardPac.ConnectionDB;
import BoardPac.BoardPacVO;

public class BoardPacDAO {
	private Connection con2;
	private PreparedStatement pstmt2;
	private ResultSet rs2;

	public BoardPacVO getBoardPacV0(BoardPacVO find){
		BoardPacVO boarder = null;
		
		try {
			con2 = ConnectionDB.con00();
			String sql="SELECT * FROM member "
					+ "WHERE memid=? AND pass=? ";
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
		if(rs2!=null)
			try {
				rs2.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		if(pstmt2!=null)
			try {
				pstmt2.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		if(con2!=null)
			try {
				con2.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

		return boarder;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
