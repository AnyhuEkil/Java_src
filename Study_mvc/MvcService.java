package Study_mvc;

import Study_mvc.MvcDao;
import Study_mvc.MvcVO;

public class MvcService {

	private MvcDao mdao2;
	// TODO Auto-generated method stub

	public boolean isValid(MvcVO mv) {
		boolean hasData = false;
		mdao2 = new MvcDao();
		if (mdao2.getMvcVO(mv) != null) {
			hasData = true;
		}
		// TODO Auto-generated method stub
		return hasData;
	}

	public MvcVO getMvcVO(MvcVO mv){
		mdao2= new MvcDao();
		return mdao2.getMvcVO(mv);
	}
}
