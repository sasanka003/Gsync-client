"use client";

import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const page = async () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
      } else if (session) {
        setUser(session.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {!user?.confirmed_at ? (
        <div className="mx-auto my-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-h1 text-common">Verify your email</h1>
            <p className="text-p text-common">
              We've sent a verification code to your email address. Enter the
              code below to confirm your identity.
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-[30vh] max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-h1 text-common">Email Verified</h1>
            <p className="text-p text-common">You Can Close This Tab</p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
