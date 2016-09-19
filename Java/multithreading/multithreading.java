package multithreading;

public class multithreading{

	static Thread t1 = new Thread(){
		public void run() {
			for(int i=0; i<4; i++){
				System.out.println("Thread 1 is on");
				try {
					Thread.sleep(20);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	};
	
	static Thread t2 = new Thread(){
		public void run() {
			for(int i=0; i<4; i++){
				System.out.println("Thread 2 is on");
				try {
					Thread.sleep(60);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	};
	
	public static void main(String[] args){
		t1.start();
		t2.start();
	}
}
