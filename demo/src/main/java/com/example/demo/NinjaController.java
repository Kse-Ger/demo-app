package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class NinjaController {
    
    @Autowired
    private NinjaService ninjaService;

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@RequestBody Ninja ninja){

        Ninja ninja1 = ninjaService.saveNinja(ninja);
        return new ResponseEntity<Ninja>(ninja1, HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Ninja> getNinjaById(@PathVariable long id){

        Ninja ninja = ninjaService.findNinjaByIdentifier(id);
        if(ninja!=null) {
            return ResponseEntity.ok(ninja);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<Iterable<Ninja>> getAllNinjas(){
        Iterable<Ninja> allNinjas = ninjaService.findAllNinjas();
        if (allNinjas!=null) {
            return ResponseEntity.ok(allNinjas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
