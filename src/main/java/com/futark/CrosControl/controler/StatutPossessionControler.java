package com.futark.CrosControl.controler;


import com.futark.CrosControl.model.Saga;
import com.futark.CrosControl.model.StatutPossession;
import com.futark.CrosControl.repository.SagaRepository;
import com.futark.CrosControl.repository.StatutPossessionRepository;
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
@RequestMapping(value = "/possession")
public class StatutPossessionControler {



    @Autowired
    public StatutPossessionRepository statutPossessionRepository;

    @PostMapping("/create")
    public ResponseEntity<StatutPossession> createSaga(@RequestBody StatutPossession statutPossession){

        return new ResponseEntity(statutPossessionRepository.save(statutPossession), HttpStatus.CREATED);
    }





    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<StatutPossession>> getALL(){

        return new ResponseEntity<>(statutPossessionRepository.findAll(), HttpStatus.OK);
    }

}
