package com.investx.backend.service;

import com.investx.backend.dto.AuthResponse;
import com.investx.backend.dto.LoginRequest;
import com.investx.backend.dto.RegisterRequest;
import com.investx.backend.model.Funds;
import com.investx.backend.model.User;
import com.investx.backend.repository.FundsRepository;
import com.investx.backend.repository.UserRepository;
import com.investx.backend.security.JwtService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final FundsRepository fundsRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            FundsRepository fundsRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.fundsRepository = fundsRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest request) {

        String email = request.email().trim().toLowerCase();

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();

        user.setName(request.name().trim());
        user.setEmail(email);

        // Never store plain-text password
        user.setPassword(
                passwordEncoder.encode(request.password())
        );

        user.setCreatedAt(LocalDateTime.now());

        User savedUser = userRepository.save(user);

        // Create initial funds account
        Funds funds = new Funds();

        funds.setUserId(savedUser.getId());
        funds.setAvailableMargin(100000);
        funds.setUsedMargin(0);
        funds.setAvailableCash(100000);
        funds.setOpeningBalance(100000);
        funds.setUpdatedAt(LocalDateTime.now());

        fundsRepository.save(funds);

        String token = jwtService.generateToken(
                savedUser.getId(),
                savedUser.getEmail()
        );

        return new AuthResponse(
                token,
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail()
        );
    }

    public AuthResponse login(LoginRequest request) {

        String email = request.email().trim().toLowerCase();

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password")
                );

        boolean passwordMatches =
                passwordEncoder.matches(
                        request.password(),
                        user.getPassword()
                );

        if (!passwordMatches) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(
                user.getId(),
                user.getEmail()
        );

        return new AuthResponse(
                token,
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}