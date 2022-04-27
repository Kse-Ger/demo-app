package com.example.demo;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class NinjaServiceTest {

    @Autowired
    private NinjaService service;

    @MockBean
    private ProjectRepository repository;

    @Test
    void findNinjaByIdTest () {
        long id = 1L;

        Ninja ninja = new Ninja();
        ninja.setId(id);
        ninja.setAge(1);
        ninja.setCity("R");

        Mockito.when(repository.getById(id)).thenReturn(ninja);

        Ninja searched = service.findNinjaByIdentifier(id);

        assertNotNull(searched);
        assertEquals(searched, ninja);
    }

}
