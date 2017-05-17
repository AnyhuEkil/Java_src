package acon_whyNot01;

import java.util.Scanner;

public class Scan {

	private static Scanner scan00;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		scan00 = new Scanner(System.in);
		System.out.println("이름?");
		String name=scan00.nextLine();
		System.out.println("입력:"+name);
		System.out.println("점수?");
		int point = scan00.nextInt();
		System.out.println("점수:"+point);
		System.out.println("키?");
		double h= scan00.nextDouble();
		System.out.println("키:"+h);
		
	}

}
