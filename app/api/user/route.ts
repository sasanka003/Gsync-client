import { User } from "@/types/User";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient();
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 401 });
      }
  
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      const safeUser: User = {
        id: user.id,
        email: user.email,
        name: user.user_metadata.name,
        image_url: user.user_metadata.avatar_url
      };

      return NextResponse.json({ safeUser }, { status: 200 });
    } 
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}