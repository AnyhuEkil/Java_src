package Study_mvc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Conn.Conn_vision;
import Study_mvc.MvcVO;

public class MvcDao {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	private String sql;

	public MvcVO getMvcVO(MvcVO sch) {
		MvcVO mv = null;
		try {
			con = Conn_vision.conn();
			sql = "SELECT * FROM VISION WHERE name=? AND dtno=? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, sch.getName());
			pstmt.setInt(2, sch.getDtno());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				mv = new MvcVO();
				mv.setName(rs.getString(1));
				mv.setDtno(rs.getInt(2));
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (con != null)
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
		return mv;
	}

	public ArrayList<MvcVO> getMvcVOList() {
		ArrayList<MvcVO> mvlist = new ArrayList<MvcVO>();
		try {
			con = Conn_vision.conn();
			sql = "SELECT * FROM vision ";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			MvcVO mv = null;
			while (rs.next()) {
				mv = new MvcVO();
				mv.setName(rs.getString(1));
				mv.setDtno(rs.getInt(2));

				mvlist.add(mv);
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			if (con != null)
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
		return mvlist;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MvcDao mdao = new MvcDao();
		MvcVO sch = new MvcVO();
		sch.setName("부왘");
		sch.setDtno(0);
		// System.out.println(dao.getMember(sch).getName());
		// System.out.println("데이터건수:" + dao.getMemberList().size());
	}

}
