package test;

import test.Member;

public class Service_test {
	private A04_MemeberDao dao;

	public boolean isValid(Member vo) {
		boolean hasData = false;
		dao = new A04_MemeberDao();
		if (dao.getMember(vo) != null) {
			hasData = true;
		}
		return hasData;
	}
	public Member geMember(Member vo){
		dao= new A04_MemeberDao();
		return dao.getMember(vo);
	}
}
