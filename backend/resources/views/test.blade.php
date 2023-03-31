<form method="post" action="/api/events/registration">
            @csrf
            
            <div class="form-group">
                <label for="account_id">>User</label>
                <input type="text" id="account_id" name="account_id">
            </div>
            <div class="form-group">
                <label for="event_id">Event</label>
                <input type="text" id="event_id" name="event_id">
            </div>
        
            <button type="submit" class="btn btn-success">Отправить заявку</button>
        </form>