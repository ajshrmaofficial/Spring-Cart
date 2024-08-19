package tech.ajayshrma.ecombackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/")
    public ResponseEntity<String> ping(){
        String pingString = "<h1 style='font-family: arial;'>Hey there, spring e-com api is working as of " + new Date() + "</h1>";
        return new ResponseEntity<>(pingString, HttpStatus.OK);
    }
}
