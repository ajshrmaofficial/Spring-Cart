package tech.ajayshrma.ecombackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.ajayshrma.ecombackend.model.User;
import tech.ajayshrma.ecombackend.service.AuthenticationService;
import tech.ajayshrma.ecombackend.utils.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User userDTO){
        String jwtToken = authenticationService.authenticate(userDTO);
        return new ResponseEntity<>(jwtToken, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User userDTO){
        authenticationService.register(userDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
