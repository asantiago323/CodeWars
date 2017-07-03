public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
        // your code
        double willCatch = 1.0 * v2 - v1;
		double catchTime = g/willCatch;
		double totalSeconds = catchTime*3600;
		double sec = totalSeconds%60;
		double totalMin = totalSeconds / 60;
		double min = totalMin %60;
		double hours = totalMin / 60;
		
		int[] time = {(int) hours,(int) min,(int) sec};
		if(v1 >= v2) { return null;}
		return time;
    }
}