import React from 'react';
import Header from './Header';
import p4 from '../images/p4.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col,Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import styles from './style.module.css';
import NavBar from './NavBar';
import Footer from './Footer';


const Library = () => {

  

  return (
    <div>
  
  
      <h1 className={styles.lh} >Clan Praise</h1>
      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url=' https://youtu.be/ewG9nQ8NI5Y?si=L0S31ronxr9Ebm46' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>BOPEDI CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/27Yp1ijqD58?si=S03TQVBWWNYLktpe' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>Dlamini ZULU CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>
       
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/gi2fWB5w8f8?si=woGusQla0TxkND8g' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>MAGAGULA SWATI CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/09AEP3ZtGrM?si=CnJkSw3ohzNmNDIw' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>XABA XHOSA   CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/2P1zXDyOwAw?si=tFtpAPI3aKC-m8Zt' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}> IZIDUKO XHOSA CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/p4ZExA5zUk4?si=nuupJPVHeimuLx9J' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>MXUMALO CLAN PRAISES</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/Jie9KRAj5RQ?si=QQbdOVaFlamMULin' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>Ndebele Clan praise</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <h1  className={styles.lh} >Clan dances</h1>
      
      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/v2LdlWFAyZs?si=Csa_sW9K7Iy75n-6' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>PEDI CLAN DANCE</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/o_1uaQ1rJrw?si=--rkPl8a4r0_8a7n' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>TSWANA CLAN DANCE</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/4ASMJVonDl0?si=l4TBCFGir6VKnDoU' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>XHOSA CLAN  DANCE</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/a8hMCsMh7zA?si=BcE3w0mWEkYPOM8E' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>ZULU CLAN  DANCE</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/ukVSWO7AkjI?si=iY-R1vLs74-mg31A' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>VENDA CLAN DANCE</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <h1  className={styles.lh} >Clan Rituals</h1>
      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/82Kgf1XzwGk?si=fKJn2N5co_SKNM17' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>TSWANA Rituals PRACTISE</Card.Text>
        </Card.Body>
        </Card>
       

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/8h4s1xgx9oo?si=aUamabo0S6HTGHdk' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>XHOSA Rituals</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/XNn7WFa8h8E?si=-lTizevYl9UyHXT3' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>TSONGA Rituals</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/esZAUjLsUSk?si=ySck0O_LEYQPm2KM' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>BOPEDI Rituals PRACTISE</Card.Text>
        </Card.Body>
        </Card>
       

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/FLQ5DM1EAI8?si=CdmOEkC-RvnalXLd' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>VENDA Rituals</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/fKBCkCJetY4?si=V3NCsQgzrQKrbrp_' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>Zulu Funeral Ritual</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/1SzTwr5r18I?si=_GJ8MOTCtFHFxZ06' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>zulu Rituals</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/V71B4Ubot2E?si=osjja0R7DvDERcid' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>NDEBELE WOMEN CULTURE</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/JL22As-N30k?si=oA1QPS1hWSTboyi2' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>BASETHO PRACTISE</Card.Text>
        </Card.Body>
        </Card>

      </section>

      
      <h1  className={styles.lh} >Clan History and folktale</h1>
      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/Zp7lVCP63TM?si=lcEQMLllrodKSI9_' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>The story of QAMATA: The african god of the XHOSA people</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/AwEaAb2SkeU?si=rdsI4yuPuqCtEtYm' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>QUEEN NANDI ZULU folktale</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/R2jKlh-11-Y?si=Xt-SFg-bg1SR-3rF' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>ZWERENDO VENDA FOLKTALE</Card.Text>
        </Card.Body>
        </Card>

      </section>

      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtube.com/shorts/wr2WaDpKfX4?si=Z86Adirhnenby7Sy' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>MOHALI BOTWANA HISTORY</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/Re5ZA6deTY8?si=IR88uCGDvWh08IzO' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>BOPEDI HISTORY</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/DJsa0KdIOJU?si=-v_gegDc7DQiJvnt' height='240px' width='450px'/>  
          <Card.Text className={styles.cardtext}>the cheetah and the lazy hunter ZULU FOLKTALE</Card.Text>
        </Card.Body>
        </Card>

      </section>
      <section className={styles.sr}>
        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/Rff4pb4LKMQ?si=bJG9g-93bGpO6zld' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>XHOSA HISTORY</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/IgQUem3B-AU?si=cyuda6ua96OyoRm5' height='240px' width='100%'/>  
          <Card.Text className={styles.cardtext}>NDEBELE HISTORY</Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body className={styles.card}>
        <ReactPlayer url='https://youtu.be/mLUrqZlP0jI?si=iqhL1sWIRfkbhChX' height='240px' width='450px'/>  
          <Card.Text className={styles.cardtext}>NDEBELE FOLKTALE</Card.Text>
        </Card.Body>
        </Card>

      </section>
       
      <Footer />
    </div>
  )
}
 
export default Library;
