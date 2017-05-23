package BoardPac;
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.SQLException;
public class ConnectionDB_sever {
	private static Connection con3;
	public static Connection con00() throws ClassNotFoundException, SQLException{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String conInfo="jdbc:oracle:thin:@192.168.0.110:1522:orcl";
		con3 = DriverManager.getConnection(conInfo, "whyNot", "whywhy");
		System.out.println("정상 접속 성공!!");
		if(con3!=null)
			try {
				con3.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return con3;
	}
}

