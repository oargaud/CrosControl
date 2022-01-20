//package com.futark.CrosControl.mqtt;
//
//import org.eclipse.paho.client.mqttv3.IMqttClient;
//import org.eclipse.paho.client.mqttv3.MqttClient;
//import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
//import org.eclipse.paho.client.mqttv3.MqttException;
//
//import java.util.UUID;
//
//public class testMQTT {
//
//
//    String publisherId = UUID.randomUUID().toString();
//    IMqttClient publisher = new MqttClient("192.168.1.39:1883",publisherId);
//
////    IMqttClient publisher = new MqttClient("tcp://iot.eclipse.org:1883",publisherId);
//
//
//
//    public testMQTT() throws Exception {
//        connectServeur();
//        abonner();
//        envoieMessage();
//
//
//    }
//
//    public void connectServeur() throws MqttException {
//        MqttConnectOptions options = new MqttConnectOptions();
//        options.setAutomaticReconnect(true);
//        options.setCleanSession(true);
//        options.setConnectionTimeout(10);
//        publisher.connect(options);
//    }
//
//    public void envoieMessage() throws Exception {
//        EngineTemperatureSensor engineTemperatureSensor = new EngineTemperatureSensor(publisher);
//        engineTemperatureSensor.call();
//    }
//
//    public void abonner() throws MqttException {
//        System.out.println("on s'abonne");
//        publisher.subscribe(EngineTemperatureSensor.TOPIC,(topic, msg) -> {
//            byte[] payload = msg.getPayload();
//            System.out.println("topic recu " + topic);
//            System.out.println("payload recu " + new String(payload) );
//
//        });
//    }
//
//}
