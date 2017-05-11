package quizBankPac;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class QuizBank_DAO {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	// 검색 메서드(PreparedStatement)
	public ArrayList<QuizBank_VO> search(QuizBank_VO sch){
		ArrayList<QuizBank_VO> list = new ArrayList<QuizBank_VO>();
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	}

}
