package test;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TOTO
 */
@WebServlet(name = "toto", urlPatterns = { "/toto" })
public class TOTO extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TOTO() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String part = request.getParameter("part");
		String page; //="whyNot/Study/pg_mod/tot.jsp";
		if(part!=null){
			if(part.equals("two")) page="whyNot/Study/pg_mod/two.jsp";
			if(part.equals("thr")) page="whyNot/Study/pg_mod/thr.jsp";
		}
		RequestDispatcher rd = request.getRequestDispatcher(page);
		rd.forward(request, response);
	}
}














