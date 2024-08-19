package tech.ajayshrma.ecombackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.ajayshrma.ecombackend.model.User;
import tech.ajayshrma.ecombackend.repository.UserRepository;
import tech.ajayshrma.ecombackend.utils.JwtUtil;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public boolean register(User userDTO){
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        userRepository.save(userDTO);
        return true;
    }

    public String authenticate(User userDTO){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword())
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(userDTO.getUsername());

        return jwtUtil.generateToken(userDetails.getUsername());
    }

}
