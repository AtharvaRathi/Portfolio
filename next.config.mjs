/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/webhook',
        destination: 'https://github.com/AtharvaRathi/Fault-Tolerant-Webhook-Dispatch-Engine',
        permanent: false,
      },
      {
        source: '/rag',
        destination: 'https://github.com/AtharvaRathi/Adaptive-Corrective-Slef-Reflective-RAG',
        permanent: false,
      },
      {
        source: '/vstream',
        destination: 'https://github.com/AtharvaRathi/VStream-Vision-Language-Inference-Engine',
        permanent: false,
      },
      {
        source: '/semanticedge',
        destination: 'https://github.com/AtharvaRathi/SemanticEdge-Ege-to-Cloud-Video-Analytics-Pipeline',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
