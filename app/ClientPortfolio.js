"use client";

import { useEffect, useState } from "react";

export default function ClientPortfolio() {
  const [status, setStatus] = useState("");
  const [activeTab, setActiveTab] = useState("processor");

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    const handleScroll = () => {
      fadeElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          element.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully! 🚀");
        e.target.reset();
      } else {
        const errorData = await res.json();
        setStatus(`Failed: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      setStatus("Network error — could not send message.");
    }
  };

  return (
    <>
      {/* Navigation */}
      <header>
        <nav className="navbar">
          <div className="logo">Sir M.K. Keitseng&apos;s Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <h1>Miguel Kesego <span>Keitseng</span></h1>
          <h2>
            Aspiring Data analyst and Network Engineer.<br />
            
          </h2>
          <p>
            Building reliable infrastructure and elegant digital experiences from Botswana.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="image-card">
            <img src="/assets/miguel.jpg" alt="Miguel Kesego Keitseng" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title">
          <h2>About Miguel</h2>
        </div>
        <div className="about-container">
          <div className="about-text fade-in">
            <h3>Curious by nature. Engineer by craft.</h3>
            <p>
              I&apos;m a passionate aspiring daataa analyst with a strong interest in designing, building, and maintaining the physical and virtual infrastructure that keeps modern systems running.
            </p>
            <p>
              I&apos;m currently a student who has goals of monitoring network performance, building modern digital solutions, and continuously learning new technologies to create impactful user experiences.
            </p>
          </div>
          <div className="qualities fade-in">
            <h3>Personal Qualities</h3>
            <ul>
              <li>Passionate learner</li>
              <li>Team collaboration</li>
              <li>Problem solving</li>
              <li>Technology enthusiast</li>
              <li>Adaptability & growth</li>
            </ul>
          </div>
        </div>

        <div className="education-grid">
          <div className="edu-card fade-in">
            <h3>Maoka CJSS</h3>
            <p>Junior Secondary Education</p>
          </div>
          <div className="edu-card fade-in">
            <h3>Ledumang Senior Secondary School</h3>
            <p>Senior Secondary Education</p>
          </div>
          <div className="edu-card fade-in">
            <h3>BSc Information Systems & Data Management</h3>
            <p>BIUST — Botswana International University of Science and Technology</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-title">
          <h2>Skills Powering My Work</h2>
          <p>A blend of network fundamentals and front-end craft — with room for growth.</p>
        </div>
        <div className="skills-container">
          <div className="skill-card fade-in">
            <div className="skill-info"><span>Networking</span><span>70%</span></div>
            <div className="progress-bar"><div className="progress networking"></div></div>
          </div>
          <div className="skill-card fade-in">
            <div className="skill-info"><span>Web Design</span><span>60%</span></div>
            <div className="progress-bar"><div className="progress webdesign"></div></div>
          </div>
          <div className="skill-card fade-in">
            <div className="skill-info"><span>HTML</span><span>60%</span></div>
            <div className="progress-bar"><div className="progress html"></div></div>
          </div>
          <div className="skill-card fade-in">
            <div className="skill-info"><span>CSS</span><span>60%</span></div>
            <div className="progress-bar"><div className="progress css"></div></div>
          </div>
          <div className="skill-card fade-in">
            <div className="skill-info"><span>JavaScript</span><span>60%</span></div>
            <div className="progress-bar"><div className="progress js"></div></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-title">
          <h2>Projects That Shaped Me</h2>
        </div>
        <div className="project-grid">
          <div className="project-card fade-in">
            <h3>Loadlink — Distributed AI Traffic Processor</h3>
            <span className="role"><b>Role: Processing Worker Lead</b></span>
            <p>
              The brain of a distributed internet-café platform. A Python worker consumes live traffic counts from Kafka, maintains a sliding window per branch with Pandas, fits a Meta Prophet model to forecast the next hour, caches predictions in Redis for the dashboard, and persists actuals + forecasts in InfluxDB.
            </p>
            <div className="tech-stack">
              <span>Python</span><span>Kafka</span><span>Redis</span><span>InfluxDB</span><span>Docker Desktop</span><span>Pandas</span><span>Prophet</span>
            </div>
          </div>

          <div className="project-card fade-in">
            <h3>Academic Web Application</h3>
            <span className="role"><b>Role: Front-End Developer</b></span>
            <p>
              Designed and built a responsive web application using HTML, CSS and JavaScript. Focused on accessible layouts, interactive UI states and a clean component structure.
            </p>
            <div className="tech-stack">
              <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive UI</span>
            </div>
          </div>

          <div className="project-card fade-in">
            <h3>Online Learning Platform</h3>
            <span className="role"><b>Role: Project Lead</b></span>
            <p>
              Designed to improve digital learning accessibility and interaction between students and instructors.
            </p>
            <div className="tech-stack">
              <span>Leadership</span><span>Team Management</span><span>Web Systems</span>
            </div>
          </div>

          <div className="project-card fade-in">
            <h3>Networking LabTests</h3>
            <p>Simulated networks using Cisco Packet Tracer in a lab environment.</p>
            <div className="tech-stack">
              <span>Cisco Packet Tracer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logic/Code Section with Operational Tabs */}
      <section className="section code-section">
        <div className="section-title">
          <h2>How My Logic Looks</h2>
          <p>Real excerpts from the Loadlink Distributed AI Traffic Processor — written as the Processing Worker Lead.</p>
        </div>

        <div className="code-tabs">
          <button className={`tab-btn ${activeTab === "processor" ? "active" : ""}`} onClick={() => setActiveTab("processor")}>processor.py</button>
          <button className={`tab-btn ${activeTab === "mock" ? "active" : ""}`} onClick={() => setActiveTab("mock")}>mock_data.py</button>
          <button className={`tab-btn ${activeTab === "docker" ? "active" : ""}`} onClick={() => setActiveTab("docker")}>docker-compose.yml</button>
          <button className={`tab-btn ${activeTab === "test" ? "active" : ""}`} onClick={() => setActiveTab("test")}>test.py</button>
        </div>

        {activeTab === "processor" && (
          <div className="code-container active-tab">
            <pre><code>{`import json
import redis
import pandas as pd
from prophet import Prophet
from confluent_kafka import Consumer

consumer = Consumer({
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'loadlink-group',
    'auto.offset.reset': 'earliest'
})
consumer.subscribe(['loadlink.traffic.raw'])
r = redis.Redis(host='localhost', port=6379)
branch_histories = {}
print("Loadlink AI Processor Active")

while True:
    msg = consumer.poll(1.0)
    if msg is None: continue
    data = json.loads(msg.value().decode('utf-8'))
    branch = data['branch_id']
    traffic = data['metrics']['current_traffic']
    if branch not in branch_histories:
        branch_histories[branch] = []
    branch_histories[branch].append(traffic)
    print(f"[{branch}] Traffic: {traffic}")`}</code></pre>
          </div>
        )}

        {activeTab === "mock" && (
          <div className="code-container active-tab">
            <pre><code>{`import json
import time
import random
from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)
TOPIC = 'loadlink.traffic.raw'

while True:
    payload = {
        "branch_id": "Branch_A",
        "timestamp": time.time(),
        "metrics": { "current_traffic": random.randint(15, 45) }
    }
    producer.send(TOPIC, payload)
    print("Traffic Sent")
    time.sleep(5)`}</code></pre>
          </div>
        )}

        {activeTab === "docker" && (
          <div className="code-container active-tab">
            <pre><code>{`version: '3'
services:
  kafka:
    image: confluentinc/cp-kafka
  zookeeper:
    image: confluentinc/cp-zookeeper
  redis:
    image: redis
  influxdb:
    image: influxdb`}</code></pre>
          </div>
        )}

        {activeTab === "test" && (
          <div className="code-container active-tab">
            <pre><code>{`import redis
from confluent_kafka import Consumer

def test_connections():
    try:
        r = redis.Redis(host='localhost', port=6379)
        if r.ping(): print("REDIS CONNECTED")
    except Exception as e: print(e)

    try:
        consumer = Consumer({'bootstrap.servers': 'localhost:9092', 'group.id': 'test-group'})
        meta = consumer.list_topics(timeout=5)
        print("KAFKA CONNECTED")
        consumer.close()
    except Exception as e: print(e)

if __name__ == "__main__":
    test_connections()`}</code></pre>
          </div>
        )}

        <div className="workflow-grid">
          <div className="workflow-card">
            <h3>Step 1</h3><h4>Listen</h4>
            <p>Poll Kafka topic loadlink.traffic.raw for live traffic counts.</p>
          </div>
          <div className="workflow-card">
            <h3>Step 2</h3><h4>Analyze</h4>
            <p>Build sliding windows per branch and generate forecasts using Prophet AI models.</p>
          </div>
          <div className="workflow-card">
            <h3>Step 3</h3><h4>Serve</h4>
            <p>Cache predictions in Redis and persist historical data in InfluxDB.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="section-title">
          <h2>Future Services & Goals</h2>
        </div>
        <div className="services-grid">
          <div className="service-card fade-in">
            <h3>Network Infrastructure</h3>
            <p>Designing and supporting reliable network topologies.</p>
          </div>
          <div className="service-card fade-in">
            <h3>Web Development</h3>
            <p>Responsive interfaces and modern front-end experiences.</p>
          </div>
          <div className="service-card fade-in">
            <h3>IT Consulting</h3>
            <p>Infrastructure guidance and digital workflow solutions.</p>
          </div>
          <div className="service-card fade-in">
            <h3>Monitoring & Optimization</h3>
            <p>Observability and performance optimization.</p>
          </div>
          <div className="service-card fade-in">
            <h3>Network Security</h3>
            <p>Implement firewalls, VPNs, IDS/IPS, and access control to protect against cyberthreats.</p>
          </div>
          <div className="service-card fade-in">
            <h3>Disaster Recovery</h3>
            <p>Design backup and failover systems to keep services running during outages.</p>
          </div>
          <div className="service-card fade-in">
            <h3>Installation and Configuration</h3>
            <p>Setup routers, switches, firewalls, and wireless systems to ensure smooth connectivity.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-title">
          <h2>Let&apos;s Build Something <span>👷</span></h2>
          <p>Open to internships, collaboration and freelance front-end work.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Email Address 📧</h3>
            <p>miguelkeitseng5@gmail.com</p>
            <h3>Phone Number 📞</h3>
            <p>+267 71 869 211</p>
            <h3>Alt. Phone Number 📞</h3>
            <p>+267 78 756 469</p>
          </div>
          <form id="contactForm" onSubmit={handleFormSubmit} className="contact-form fade-in">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
        {status && <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
      </section>

      {/* Footer */}
      <footer>
        <h3>Miguel Keitseng</h3>
        <p>Built with passion for technology and innovation.</p>
        <p>&copy; 2026 Miguel Kesego Keitseng. <br />All rights reserved.</p>
      </footer>
    </>
  );
}