---
title: AREDN Tunnel Client Setup | KT3I
description: A quick tutorial on connecting to an AREDN Mesh Network via tunnel.
---

# AREDN Tunnel Client Setup

A quick and dirty tutorial on connecting to an AREDN Mesh Network via tunnel.

### Requirements

1. AREDN Node with at least 64mb of memory — each tunnel connection takes about 0.5mb worth of memory
2. WAN Interface connected to the same network as the desired tunnel server (typically internet)

### Procedure

1. Log onto the node you wish to use as a tunnel client. If it is the local node you can use [http://localnode.local.mesh:8080/](http://localnode.local.mesh:8080/)

2. Make note of the node's name

   ![Node name in UI](/aredntunnel/Step1.png)

3. Click on the _Setup_ link and enter the node's admin username and password when prompted.

4. From the heading menu click on the link for _Tunnel Client_

   ![Tunnel client menu](/aredntunnel/Step3.png)

5. Install the tunnel package by clicking on the _Click on install_ button.

   ![Install tunnel package](/aredntunnel/Step4.png)

6. After the tunnel package is installed, reboot the node.

7. Contact the person or organization hosting the tunnel server you wish to connect to. Provide them with at a minimum the tunnel client's node name (as noted in step 2) and your contact information. If your request for access is granted they will provide you with the host server name, network, and a password.

8. On your tunnel node, enter the information provided by the tunnel server's operator in the correct field, check enable and click on the _add_ button.

   ![Tunnel server fields](/aredntunnel/Step5.png)

9. Click the _Save Changes_ button. If everything works you should be connected.
