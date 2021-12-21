package com.futark.CrosControl.mqtt;

import org.eclipse.paho.client.mqttv3.IMqttClient;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.util.Random;
import java.util.concurrent.Callable;

public class EngineTemperatureSensor implements Callable<Void> {

    // ... private members omitted
    private IMqttClient client;
    public static final String TOPIC = "toto";
    private Random rnd = new Random();

    public EngineTemperatureSensor(IMqttClient client) {
        this.client = client;
    }

    @Override
    public Void call() throws Exception {
        if ( !client.isConnected()) {
            return null;
        }
        MqttMessage msg = readEngineTemp();
        msg.setQos(0);
        msg.setRetained(true);
        client.publish(TOPIC,msg);
        System.out.println("on envoie le message");
        return null;
    }

    private MqttMessage readEngineTemp() {
//        String message = " toto vas bien";
//        byte[] payload = message.getBytes();
        double temp =  80 + rnd.nextDouble() * 20.0;
        byte[] payload = String.format("T:%04.2f",temp).getBytes();
        return new MqttMessage(payload);
    }
}