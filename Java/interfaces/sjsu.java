package interfaces;

public class sjsu implements university{

	public void name() {
		System.out.println("University name is SJSU");
	}

	public void bestDept() {
		System.out.println("Best department in SJSU is Software Engineering");
	}
	
	public static void main(String[] args){
		sjsu s = new sjsu();
		s.name();
		s.bestDept();
	}
}
