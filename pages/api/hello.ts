// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string;
};

export const config = {
  runtime: "experimental-edge",
};

export default async function handler() {
  return new Response(JSON.stringify({ name: "Derek J. Augustine" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
