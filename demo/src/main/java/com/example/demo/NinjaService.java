package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NinjaService {
    @Autowired
    private ProjectRepository projectRepository;

    public Ninja saveNinja(Ninja ninja){
        try{
            ninja.setId(ninja.getId());
            return projectRepository.save(ninja);
        }catch (Exception e){
            throw e;
        }

    }

    public Ninja findNinjaByIdentifier(Long id){
        return projectRepository.getById(id);
    }

    public Iterable<Ninja> findAllNinjas(){
        return projectRepository.findAll();
    }
}
