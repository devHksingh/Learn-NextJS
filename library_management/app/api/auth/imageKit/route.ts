import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";


const publicKey= config.env.imagekit.publicKey
const privateKey= config.env.imagekit.privateKey
const urlEndpoint= config.env.imagekit.urlEndpoint

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}