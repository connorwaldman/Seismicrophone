# Seismicrophone

This is an application built using Node JS that parses GeoJSON files consisting of real-time earthquake data from the U.S. Geological Survey. The application uses this data to generate a sonic representation of the most recent seismic events to have occurred in a specified region of the world.  

# parse.js 

Gets data from the live USGS earthquake feed and parses the JSON file. Returns desired data - magnitude, coordinates (latitude, longitude), depth, and location (place)

# synth.js

Generates four sound sources (sine waves). The frequency of each respective sine wave is determined by the earthquake data.


# Future versions 

Will allow the user to change the type of waveform or sound source.
Add geographical data to set more sound parameters (e.g., amplitude, timbre, playback speed, effects, melodic content, etc.)
