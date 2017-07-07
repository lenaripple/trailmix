//
//  viewController.h
//  trailmix
//
//  Created by Lena Ripple on 7/7/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#ifndef viewController_h
#define viewController_h
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>

// Add this to the body
@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  FBSDKLoginButton *loginButton = [[FBSDKLoginButton alloc] init];
  // Optional: Place the button in the center of your view.
  loginButton.center = self.view.center;
  [self.view addSubview:loginButton];
}

@end


#endif /* viewController_h */
