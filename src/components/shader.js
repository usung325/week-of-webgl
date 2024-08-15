export const vertex = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        // vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        // modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;

        // vec4 viewPosition = viewMatrix * modelPosition;
        // vec4 projectedPosition = projectionMatrix * viewPosition;

        // gl_Position = projectedPosition;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }

`


export const fragment = `
    varying vec2 vUv;
    
    float plot(vec2 st, float pct) {    
        return smoothstep(pct - 0.01, pct, st.y) - smoothstep(pct, pct + 0.01, st.y);
    }
        
    void main() {
        vec2 st = vUv;

        float y = step(0.5,st.x);

        vec3 color = vec3(y);

        float pct = plot(st,y);
        color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

        gl_FragColor = vec4(color,1.0);
    }
`