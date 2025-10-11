package com.aurora.backend.userhublogin.backend_userhublogin.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import com.aurora.backend.userhublogin.backend_userhublogin.auth.filters.JwtAuthenticationFilter;
import com.aurora.backend.userhublogin.backend_userhublogin.auth.filters.JwtValidationFilter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

    // Bean para encriptar passwords
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Bean para AuthenticationManager usando AuthenticationConfiguration
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    // Configuración de seguridad HTTP
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authManager) throws Exception {
        return http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/users").permitAll()
                        .requestMatchers(HttpMethod.GET, "/users/{id}").hasAnyRole("USER", "ADMIN")
                        .requestMatchers(HttpMethod.POST, "/users").hasRole("ADMIN")
                        .requestMatchers("/users/**").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .addFilter(new JwtAuthenticationFilter(authManager))
                .addFilter(new JwtValidationFilter(authManager))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }
}
