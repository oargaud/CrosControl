package com.futark.CrosControl.controler;



import com.futark.CrosControl.model.Edition;
import com.futark.CrosControl.repository.EditionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/edition")
public class EditionControler {

    @Autowired
    public EditionRepository editionRepository;


    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Edition createEdition(@RequestBody Edition edition){

        return editionRepository.save(edition);
    }



    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Edition>> getALL(){
        return new ResponseEntity<>(editionRepository.findAll(), HttpStatus.OK);
    }

}
