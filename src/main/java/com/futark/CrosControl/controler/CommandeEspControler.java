package com.futark.CrosControl.controler;



import com.futark.CrosControl.model.CommandeEsp;
import com.futark.CrosControl.repository.CommandeEspRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/commandeesp")
public class CommandeEspControler {

    @Autowired
    public CommandeEspRepository commandeEspRepository;




    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<CommandeEsp>> getCommandes(){
        return new ResponseEntity<>(commandeEspRepository.findAll(), HttpStatus.OK);
    }







    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<CommandeEsp> getCommande(@PathVariable(value = "id")Long id){
        return new ResponseEntity<>(commandeEspRepository.getById(id), HttpStatus.OK);
    }







    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<CommandeEsp> setCommande(@PathVariable(value = "id")Long id){

        CommandeEsp commandeEsp = commandeEspRepository.getById(id);
        commandeEsp.setStatus(!commandeEsp.isStatus());

        return new ResponseEntity<>(commandeEspRepository.save(commandeEsp), HttpStatus.OK);
    }







}
