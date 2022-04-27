package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Ninja, Long> {
    Ninja getById(Long id);

    @Override
    Iterable<Ninja> findAll();

    @Override
    void deleteById(Long aLong);
}
