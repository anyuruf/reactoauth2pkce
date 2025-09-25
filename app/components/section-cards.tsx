import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { useContext } from "react";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";

import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Button } from "./ui/button";

export function SectionCards() {
  const { tokenData, token, logIn, logOut, error }: IAuthContext = useContext(AuthContext);

  if (error) {
    return (
      <>
        <div style={{ color: 'red' }}>An error occurred during authentication: {error}</div>
        <button onClick={() => logOut()}>Log out</button>
      </>
    );
  }

    <>
      {token ? (
        <>
          <div>
            <h4></h4>
            <pre>
              
            </pre>
          </div>
          <div>
            <h4></h4>
            <pre>
              {JSON.stringify(tokenData, null, 2)}
            </pre>
          </div>
          <button onClick={() => logOut()}>Log out</button>
        </>
      ) : (
        <>
          <div>You are not logged in.</div>
          <button onClick={() => logIn()}>Log in</button>
        </>
      )}
    </>

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {token ? (
        <><Card className="@container/card">
        <CardHeader>
          <CardDescription>Access Token (JWT)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Login Information from Access Token (Base64 decoded JWT) <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {token} 
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            UserData <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            UserData: {JSON.stringify(tokenData, null, 2)}
          </div>
        </CardFooter>
      </Card>
      </>):
       (
        <>
          <div className="flex flex-wrap items-center gap-2 md:flex-row">You are not logged in.</div>
          <Card className="@container/card">
        <CardHeader>
          <CardTitle>Please Login To Access Token (JWT)</CardTitle>
          <CardContent>
            <Button onClick={() => logIn()}>Log in</Button>
          </CardContent>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Login Information from Access Token (Base64 decoded JWT) <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Login Information from Access Token 
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            UserData <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
           Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
        </>)
      }
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}
