class SessionsController < ApplicationController
  
  before_action :present_user_cannot_access_page, only: [:new, :create]
  
  def new
    @user = User.new
    render :new
  end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_url
    else
      @user = User.new(username: params[:user][:username])
      flash.now[:errors] = ["Username or password does not match"]
      render :new
    end
  end
  
  def destroy
    log_out!
    redirect_to new_session_url
  end
end