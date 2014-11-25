class ApplicationController < ActionController::Base
	helper_method :current_user
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def log_in!(user)
    session[:session_token] = user.reset_session_token!
  end
  
  def current_user
    nil || User.find_by(session_token: session[:session_token])
  end
  
  def logged_in?
    !!current_user
  end

  def log_out!
    current_user.reset_session_token!
    session[:token] = nil
  end
  
  def present_user_cannot_access_page
    redirect_to root_url if logged_in?
  end

  def require_signed_in!
  	redirect_to new_session_url unless logged_in?
  end
end
