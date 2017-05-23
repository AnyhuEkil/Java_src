package test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class A01_SVL_Start
 * http://localhost:5080/test/a01_start
 * 서블릿 객체 호출.
 */


/* web.xml 파일에 끼워넣기
<servlet>
<servlet-name>xmlTester</servlet-name>
<servlet-class>test.A01_SVL_Start</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>xmlTester</servlet-name>
<url-pattern>/xmltest</url-pattern>
</servlet-mapping>
*/

public class A01_SVL_Start extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public A01_SVL_Start() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request,
							HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//화면
		response.setContentType("text/html; charset=UTF-8");
		//출력.Stream으로 브라우저에 전달..
		PrintWriter out = response.getWriter();
		out.print("<html><body><h1>GOOD JOB</h1></body></html>");
		
	}

}

