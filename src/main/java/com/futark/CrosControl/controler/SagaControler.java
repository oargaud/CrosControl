package com.futark.CrosControl.controler;


import com.example.vladtest.model.Saga;
import com.example.vladtest.repository.SagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/saga")
public class SagaControler {



    @Autowired
    public SagaRepository sagaRepository;

    @PostMapping("/create")
    public Saga createSaga(@RequestBody Saga saga){

        return sagaRepository.save(saga);
    }





    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Saga>> getALL(){
        return new ResponseEntity<>(sagaRepository.findAll(), HttpStatus.OK);
    }

}
