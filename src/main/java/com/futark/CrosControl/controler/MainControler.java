package com.futark.CrosControl.controler;



import com.futark.CrosControl.model.CommandeEsp;
import com.futark.CrosControl.mqtt.testMQTT;
import com.futark.CrosControl.repository.CommandeEspRepository;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping(value = "/")
public class MainControler {


    public static List<WebSocketSession> webSocketSessions = new ArrayList<>();


    @Autowired
    CommandeEspRepository commandeEspRepository;


    @RequestMapping(
            value = "/test",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void testCommande() throws IOException {

        List<CommandeEsp> commandeEsp = commandeEspRepository.findAll();



        TextMessage message = new TextMessage(new JSONArray(commandeEsp).toString());
        for(WebSocketSession webSocketSession : webSocketSessions){
            webSocketSession.sendMessage(message);
        }

    }


    @RequestMapping(
            value = "/mqtt",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void testmqtt() throws Exception {

        new testMQTT();

    }




}
