
public class arrays {

	public static void main(String[] args){
		int[]  apts = new int[6];
		apts[0] = 1200;
		apts[1] = 2200;
		apts[2] = 3200;
		apts[3] = 1200;
		apts[4] = 1000;
		apts[5] = 1600;
		
		for(int i=0; i<apts.length; i++){
			System.out.println("apartment "+i+" - "+apts[i]);
		}
	}
}
