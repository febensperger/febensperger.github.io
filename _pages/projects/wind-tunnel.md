---
title: "Intermediate-Scale Firebrand Generation"
permalink: /projects/wind-tunnel/
layout: single
author_profile: true
---

## 🔥 Intermediate-Scale Firebrand Generation in Wind Tunnel

This project explores the generation of firebrands (also known as embers) in controlled wind tunnel environments to simulate and understand real-world wildfire dynamics.

---

### 📐 Motivation

Firebrands are a major cause of structure ignition during wildland-urban interface (WUI) fires. Despite their importance, they are challenging to study due to their transient and airborne nature.  
This project establishes a repeatable experimental setup to quantify the physical properties, generation rate, and combustion behavior of firebrands in wind-driven conditions.

---

### 🧪 Methodology

The experimental campaigns were conducted using a **modular wind tunnel** custom-built at Worcester Polytechnic Institute. The setup included:

- **Fuel types**: Vegetative fuels like Douglas fir, pine needles, and engineered wooden elements
- **Ignition method**: Propane sand burner and electrically triggered ignition coils
- **Wind control**: Uniform velocities between 0.5 and 1.5 m/s using a conditioned flow section
- **Instrumentation**: High-speed video, hot-wire anemometry, and digital mass balances

---

### 🔍 Image Analysis & Detection

To capture and quantify firebrands, an image segmentation pipeline based on the **U-Net convolutional neural network** was developed:

- Trained on custom-annotated video frames
- Applied to extract particle location, size, and trajectory in real time
- Enabled mass loss correlations and frequency estimation

> **Reference**: Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation.

---

### 📸 Results Preview

*(Add images like segmented video output, tunnel photo, CAD drawing)*

---

### 🎯 Outcomes

- Developed a reproducible protocol for intermediate-scale ember testing
- Improved understanding of wind effects on firebrand lift-off and transport
- Dataset now used to train predictive models of firebrand decay and mass loss

---

📂 [Back to All Projects](/projects/)
