//package com.futark.CrosControl;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//import java.util.Arrays;
//
//@SpringBootApplication
//public class CrosControlApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(CrosControlApplication.class, args);
//	}
//
//
////	@Bean
////	public CorsFilter corsFilter() {
////		CorsConfiguration corsConfiguration = new CorsConfiguration();
////		corsConfiguration.setAllowCredentials(false);
////		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200","http://localhost:8081","http://localhost:8080","93.9.238.159"));
////		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin","Access-Control-Allow-Origin","Content-Type",
////				"Accept", "Authorization", "Origin, Accept","X-Requested-With",
////				"Access-Control-Request-Method","Access-Control-Request-Headers"));
////		corsConfiguration.setExposedHeaders(Arrays.asList("Origin","Content-Type","Accept","Authorization",
////				"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"));
////		corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
////		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
////		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",corsConfiguration);
////		return new CorsFilter(urlBasedCorsConfigurationSource);
////	}
//
//	@Bean
//	public CorsFilter corsFilter() {
//		CorsConfiguration corsConfiguration = new CorsConfiguration();
//		corsConfiguration.setAllowCredentials(true);
//		corsConfiguration.validateAllowCredentials();
//		corsConfiguration.setAllowedOriginPatterns(Arrays.asList("http://localhost:4200","http://localhost:8081","http://localhost:8080","93.9.238.159","*"));
//		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin","Access-Control-Allow-Origin","Content-Type",
//				"Accept", "Authorization", "Origin, Accept","X-Requested-With",
//				"Access-Control-Request-Method","Access-Control-Request-Headers"));
//		corsConfiguration.setExposedHeaders(Arrays.asList("Origin","Content-Type","Accept","Authorization",
//				"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"));
//		corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
//		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
//		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",corsConfiguration);
//		return new CorsFilter(urlBasedCorsConfigurationSource);
//	}
//}























package com.futark.CrosControl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class CrosControlApplication {

	private Map<String, Integer> progress = new HashMap<>();

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;


	public static void main(String[] args) {
		SpringApplication.run(CrosControlApplication.class, args);
	}


	/**
	 * Generate random numbers publish with WebSocket protocol each 3 seconds.
	 * @return a command line runner.
	 */
	@Bean
	public CommandLineRunner websocketDemo() {
		return (args) -> {
			while (true) {
				try {
					Thread.sleep(3*1000); // Each 3 sec.
					progress.put("num1", randomWithRange(0, 100));
					progress.put("num2", randomWithRange(0, 100));
					messagingTemplate.convertAndSend("/topic/progress", this.progress);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
	}

	/**
	 * Get a random integer value in a min / max range.
	 * @param min min range value
	 * @param max max range value
	 * @return A random integer value
	 */
	private int randomWithRange(int min, int max)
	{
		int range = Math.abs(max - min) + 1;
		return (int)(Math.random() * range) + (min <= max ? min : max);
	}


}















