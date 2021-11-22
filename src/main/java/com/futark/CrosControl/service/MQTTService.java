package com.futark.CrosControl.service;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

@Service
public class MQTTService {

//    public static final String TOPIC = "engine/temperature";
//    exemple urlserver
//    "tcp://iot.eclipse.org:1883"

    public IMqttClient createMqttClient(String serverUrl) throws MqttException {
        String publisherId = UUID.randomUUID().toString();

        return new MqttClient(serverUrl,publisherId);
    }


    public IMqttClient connectToServer(IMqttClient publisher) throws MqttException {
        MqttConnectOptions options = new MqttConnectOptions();
        options.setAutomaticReconnect(true);
        options.setCleanSession(true);
        options.setConnectionTimeout(10);
        publisher.connect(options);

        return publisher;
    }


    public void publishMessage(IMqttClient client, String message,String url) throws MqttException {

        if ( client.isConnected()) {
            byte[] payload = message.getBytes();
            MqttMessage msg = new MqttMessage(payload);
            msg.setQos(0);
            msg.setRetained(true);
            client.publish(url,msg);
        }

    }


    public void subscribe(IMqttClient client,String url) throws InterruptedException, MqttException {



        CountDownLatch receivedSignal = new CountDownLatch(10);
        client.subscribe(url, (topic, msg) -> {
            byte[] payload = msg.getPayload();
            // ... payload handling omitted
            receivedSignal.countDown();
        });
        receivedSignal.await(1, TimeUnit.MINUTES);

    }



}
