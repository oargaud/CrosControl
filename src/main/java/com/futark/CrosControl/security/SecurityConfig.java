package com.futark.CrosControl.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
                .cors()
                .and()
                .headers()
                .frameOptions().disable()
                .and()
                .csrf().disable()
                .authorizeRequests()

                .antMatchers("/").permitAll()

                .antMatchers(
                        "/stomp",
                        "/bd/*",
                        "/commandeesp/*")
//                .permitAll()
                .access("hasAnyRole(" +
                        "'ROLE_USER'," +
                        " 'ROLE_ADMIN'," +
                        "'ROLE_SUPER_ADMIN')")

                .anyRequest()
                .authenticated();
        // @formatter:on


//
//        // Config for Login Form
//        http.authorizeRequests().and().formLogin()//
//                // Submit URL of login page.
//                .loginProcessingUrl("/j_spring_security_check") // Submit URL
//                .loginPage("/login")//
//                .defaultSuccessUrl("/home")//
//                .failureUrl("/login?error=true")//
////                .failureUrl("/error")//
//                .usernameParameter("username")//
//                .passwordParameter("password")
//                // Config for Logout Page
//                .and().logout().logoutUrl("/logout")
//                .logoutSuccessUrl("/login").deleteCookies("auth_code", "JSESSIONID").invalidateHttpSession(true);

        // Config Remember Me.
//        http.authorizeRequests().and() //
//                .rememberMe().tokenRepository(this.persistentTokenRepository()) //
//                .tokenValiditySeconds(1 * 24 * 60 * 60); // 24h







    }

    /**
     * Apply CORS configuration before Spring Security.
     * By default, "http.cors" take a bean called corsConfigurationSource.
     * @implNote https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#cors
     * @return a CORS configuration source.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}