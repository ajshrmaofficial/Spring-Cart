package tech.ajayshrma.ecombackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.ajayshrma.ecombackend.model.Product;
import tech.ajayshrma.ecombackend.service.ProductService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController{

    @Autowired
    ProductService prodService;

    @GetMapping("/getProducts")
    public List<Product> getProducts(){
        return prodService.getProducts();
    }

    @GetMapping("/getProducts/{productID}")
    public Optional<Product> getProductByID(@PathVariable int productID){
        return prodService.getProductByID(productID);
    }

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product newProduct){
        return prodService.addProduct(newProduct);
    }

    @GetMapping("/searchProducts")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword){
        List<Product> productResults = prodService.searchProducts(keyword);
        return new ResponseEntity<>(productResults, HttpStatus.OK);
    }
}
